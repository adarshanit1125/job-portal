import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs } from "../services/jobService";

// Async thunk to fetch initial jobs
export const getJobs = createAsyncThunk(
    "jobs/getJobs",
    async () => {
        const data = await fetchJobs();
        return data;
    }
);

const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        loading: false,
    },
    reducers: {
        // CREATE
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },

        // DELETE
        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter(
                (job) => job.id !== action.payload
            );
        },

        // UPDATE (STEP 37.1)
        updateJob: (state, action) => {
            const index = state.jobs.findIndex(
                (job) => job.id === action.payload.id
            );
            if (index !== -1) {
                state.jobs[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.loading = false;

                // Merge API jobs with existing Redux jobs
                const existingIds = state.jobs.map((job) => job.id);
                const newJobs = action.payload.filter(
                    (job) => !existingIds.includes(job.id)
                );

                state.jobs = [...state.jobs, ...newJobs];
            });
    },
});

// EXPORT ACTIONS
export const { addJob, deleteJob, updateJob } = jobSlice.actions;

// EXPORT REDUCER
export default jobSlice.reducer;
