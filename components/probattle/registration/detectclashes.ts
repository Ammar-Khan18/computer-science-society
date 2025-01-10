import { Module } from "./types";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import minMax from 'dayjs/plugin/minMax'
dayjs.extend(duration);
dayjs.extend(minMax);

// Helper function to detect time clashes
export const detectClashes = (modules: Array<Module>, selectedModules: string | Array<string>) => {
    const clashes = [];
    for (let i = 0; i < selectedModules.length; i++) {
        for (let j = i + 1; j < selectedModules.length; j++) {
            const module1 = modules.find((m) => m.name === selectedModules[i]);
            const module2 = modules.find((m) => m.name === selectedModules[j]);

            if (!module1 || !module2) throw new Error("Invalid modules, (module out of bounds)");

            // Parse times using dayjs and calculate durations
            const start1 = dayjs(`1970-01-01T${module1.start}:00`);
            const end1 = dayjs(`1970-01-01T${module1.end}:00`);
            const start2 = dayjs(`1970-01-01T${module2.start}:00`);
            const end2 = dayjs(`1970-01-01T${module2.end}:00`);

            // Check if times overlap
            if (start1.isBefore(end2) && start2.isBefore(end1)) {
                const overlapStart = dayjs.max(start1, start2);
                const overlapEnd = dayjs.min(end1, end2);

                // Calculate overlap duration in minutes
                const overlapDuration = overlapEnd.diff(overlapStart, 'minute');
                
                // Format the overlap duration to a readable format
                const formattedDuration = formatDuration(overlapDuration);

                clashes.push({
                    module1: module1.name,
                    module2: module2.name,
                    overlap: formattedDuration
                });
            }
        }
    }
    return clashes;
};

// Helper function to format duration into a user-friendly format
const formatDuration = (minutes) => {
    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    let result = `${hours} hour${hours > 1 ? 's' : ''}`;
    if (remainingMinutes > 0) {
        result += ` ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
    }
    return result;
};
