import React, { useEffect, useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// export const fetchDate = create((set) => ({
//     fetchDates: async () => {
//         useEffect(() => {
//             setAppState({ loading: true });
//             fetch('http://localhost:3000/db')
//                 .then((res) => res.json())
//                 .then((history) => {
//                     console.log(history);
//                     setAppState({ loading: false, repos: history });
//                 })
//                 .catch((err) => {
//                     console.log(err.message);
//                 });
//         }, [setAppState]);
//     }
// }))


export const storeDate = create((set) => ({
    history: [],
    arrFin: [],
    loading: false,
    error: null,
    fetchDates: async () => {

        set({ loading: true })

        try {

            const res = await fetch('http://localhost:3001/db')
            if (!res.ok) {

                throw new Error('Даты не получены!')

            }
            const historyTemp = await res.json()
            //set({ history: historyTemp, error: null })
            console.table(historyTemp);
            const arrTemp = [];
            historyTemp.history?.map((history) => {
                arrTemp.push(new Date(history.date));
            });

            arrTemp.sort(function (a, b) {
                return a - b;
              });

            const arrFin = arrTemp.reduce(function (rv, item) {
                (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item.toLocaleDateString());
                return rv
            }, {})
            set({arrFin: arrFin, history: historyTemp, error: null})


        }
        catch (error) {
            set({ error: error.message })

        }
        finally {
            set({ loading: false })

        }
    }


}



))