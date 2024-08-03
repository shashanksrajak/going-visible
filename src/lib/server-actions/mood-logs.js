"use server";

import { db } from "../firebase/config";
import { doc, addDoc, serverTimestamp, collection, query, where, Timestamp, getDocs } from "firebase/firestore";
import dayjs from "dayjs";

export async function addMoodLog(userId, moodData) {
    try {
        const userRef = doc(db, "users", userId);
        const moodLogsCollection = collection(userRef, "moodLogs");

        await addDoc(moodLogsCollection, {
            ...moodData,
            timestamp: serverTimestamp()
        });

        console.log("Mood log added successfully.");

        return true;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export async function getMoodLogsForDay(userId, date) {
    const userRef = doc(db, "users", userId);
    const moodLogsCollection = collection(userRef, "moodLogs");

    // Calculate start and end of the day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const dayQuery = query(
        moodLogsCollection,
        where("timestamp", ">=", Timestamp.fromDate(startOfDay)),
        where("timestamp", "<=", Timestamp.fromDate(endOfDay))
    );

    const querySnapshot = await getDocs(dayQuery);
    const moods = []
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        moods.push({ ...doc.data(), timestamp: doc.data().timestamp.toDate().toLocaleString(), })
    });

    return moods;
}

export async function getMoodLogsForMonth(userId, selectedMonth) {
    const moodLogsRef = collection(db, 'users', userId, 'moodLogs');

    // Get start and end of the month using dayjs
    const start = dayjs(selectedMonth).startOf('month').toDate();
    const end = dayjs(selectedMonth).endOf('month').toDate();

    // Query to get mood logs within the month range
    const q = query(moodLogsRef, where('timestamp', '>=', Timestamp.fromDate(start)), where('timestamp', '<=', Timestamp.fromDate(end)));

    const querySnapshot = await getDocs(q);

    const moodLogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), timestamp: doc.data().timestamp.toDate().toLocaleString() }));

    return moodLogs;
}

