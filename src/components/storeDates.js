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
    loading: false,
    error: null,
    fetchDates: async () => {

        set({ loading: true })

        try {
            
            const res = await fetch('http://localhost:3001/db')
            if (!res.ok) {

                throw new Error('Даты не получены!')
                
            }

            set({ history: await res.json(), error: null })
            // if (res.status >=200 && res.status < 300){
            //     set({ history: await res.json(), error: null })
            // }
            // else{
            //     throw new Error('Даты не получены!')
            // }

        }
        catch (error) {
            set({ error: error.message })
            
        }
        finally {
            set({ loading: false })
        }
    }
}))