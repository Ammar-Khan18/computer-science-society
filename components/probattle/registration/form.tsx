"use client";

import { create } from "zustand";
import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    TextField,
    Button,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    CircularProgress,
    IconButton,
    Divider,
    InputAdornment,
    ListItemText,
    Checkbox,
    List,
    ListItem,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
// import { useRegistrationStore } from "@/app/zustand/probattle";
// import { detectClashes } from "./detectclashes";
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


export interface RegistrationStore {
    teamName: string;
    selectedModules: string[]; // Assuming module IDs are strings
    members: { name: string; email: string; contact: string; cnic: string }[];
    loading: boolean;
    successMessage: string;
    errors: Record<string, string>; // Use a dictionary for better error handling

    setTeamName: (value: string) => void;
    setSelectedModules: (modules: string[]) => void;
    setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) => void;
    setLoading: (value: boolean) => void;
    setSuccessMessage: (message: string) => void;
    setErrors: (errors: Record<string, string>) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
    teamName: "",
    selectedModules: [],
    members: [{ name: "", email: "", contact: "", cnic: "" }],
    loading: false,
    successMessage: "",
    errors: {},

    setTeamName: (value: string) => set({ teamName: value }),
    setSelectedModules: (modules: string[]) => set({ selectedModules: modules }),
    setMembers: (members: { name: string; email: string; contact: string; cnic: string }[]) =>
        set({ members }),
    setLoading: (value: boolean) => set({ loading: value }),
    setSuccessMessage: (message: string) => set({ successMessage: message }),
    setErrors: (errors: Record<string, string>) => set({ errors }),
}));
export interface Module {
    name: string, type: "attendee" | "regular", price: number, minMembers: number, maxMembers: number, start: string, end: string, tier: string, tierDescription: string
}
// Module Data with Time Ranges
export const modules: Module[] = [
    {
        name: "Open to speaker sessions, workshops, mentor's lounge",
        type: "attendee",
        price: 800,
        minMembers: 1,
        maxMembers: 1,
        start: "12 Jan",
        end: "30 Jan",
        tier: "None",
        tierDescription: "Attendee Pass (Individual)",
    },
    {
        name: "Machine Learning",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University level competition",
    },
    {
        name: "App Dev",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University level competition",
    },
    {
        name: "NLP",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University level competition",
    },
    {
        name: "Business Intelligence",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University level competition",
    },
    {
        name: "UI/UX",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University + College level competition",
    },
    {
        name: "Robotics Robo Soccer",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University + College level competition",
    },
    {
        name: "Robotics LFR",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 3,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 1",
        tierDescription: "University + College level competition",
    },
    {
        name: "Competitive Programming",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 2,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 2",
        tierDescription: "Code-based competition",
    },
    {
        name: "Speed Debugging (code)",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 2,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 2",
        tierDescription: "Code-based competition",
    },
    {
        name: "Speed Debugging (no code)",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 2,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 2",
        tierDescription: "College-level competition",
    },
    {
        name: "Query Quest (Database)",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 2,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 2",
        tierDescription: "University-level competition",
    },
    {
        name: "Cybersecurity",
        type: "regular",
        price: 1500,
        minMembers: 1,
        maxMembers: 2,
        start: "12 Jan",
        end: "30 Jan",
        tier: "Technical Tier 2",
        tierDescription: "University-level competition",
    },
    {
        name: "Tech Tank",
        type: "regular",
        price: 2500,
        minMembers: 1,
        maxMembers: 4,
        start: "12 Jan",
        end: "30 Jan",
        tier: "General",
        tierDescription: "University + College level competition",
    },
    {
        name: "Trading",
        type: "regular",
        price: 2500,
        minMembers: 1,
        maxMembers: 4,
        start: "12 Jan",
        end: "30 Jan",
        tier: "General",
        tierDescription: "University + College level competition",
    },
    {
        name: "FIFA",
        type: "regular",
        price: 1000,
        minMembers: 1,
        maxMembers: 1,
        start: "12 Jan",
        end: "30 Jan",
        tier: "General",
        tierDescription: "Individual competition",
    },
    {
        name: "Tekken",
        type: "regular",
        price: 1000,
        minMembers: 1,
        maxMembers: 1,
        start: "12 Jan",
        end: "30 Jan",
        tier: "General",
        tierDescription: "Individual competition",
    },
];


const RegistrationForm: React.FC = () => {
    const {
        teamName,
        selectedModules,
        members,
        loading,
        successMessage,
        errors,
        setTeamName,
        setSelectedModules,
        setMembers,
        setLoading,
        setSuccessMessage,
        setErrors,
    } = useRegistrationStore();

    const [formErrors, setFormErrors] = useState<any>({
        teamName: "",
        members: [],
        selectedModules: "",
    });

    const clashes = detectClashes(modules, selectedModules);

    const handleModuleChange = (event: { target: { value: unknown } }) => {
        const value = event.target.value as string[];
        setSelectedModules(value);
        // Revalidate the team size conflict after module change
        validateModuleSize(value);
    };

    const handleAddMember = () => {
        setMembers([...members, { name: "", email: "", contact: "", cnic: "" }]);
    };

    const handleRemoveMember = (index: number) => {
        setMembers(members.filter((_, i) => i !== index));
    };
    useEffect(() => {
        validateModuleSize(selectedModules);
    }, [members])

    const validateField = (field: string, value: string, memberIndex?: number) => {
        const errors = { ...formErrors };

        switch (field) {
            case "teamName":
                errors.teamName = value.trim() ? "" : "Team name is required.";
                break;
            case "selectedModules":
                errors.selectedModules = selectedModules.length === 0 ? "Please select at least one module." : "";
                break;
            case "name":
            case "email":
            case "contact":
            case "cnic":
                if (memberIndex !== undefined) {
                    const member = members[memberIndex];
                    errors.members[memberIndex] = errors.members[memberIndex] || {};
                    errors.members[memberIndex][field] = value.trim() ? "" : `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                }
                break;
            default:
                break;
        }

        setFormErrors(errors);
    };

    const validateModuleSize = (selectedModules: string[]) => {
        const errors = { ...formErrors };
        selectedModules.forEach((module) => {
            const moduleData = modules.find((m) => m.name === module);
            if (moduleData) {
                const teamSize = members.length;
                if (teamSize < moduleData.minMembers || teamSize > moduleData.maxMembers) {
                    errors.selectedModules = `Team size must be between ${moduleData.minMembers} and ${moduleData.maxMembers} members for the selected module: ${module}.`;
                } else {
                    errors.selectedModules = "";
                }
            }
        });

        setFormErrors(errors);
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setLoading(true);
        try {
            setSuccessMessage("Team successfully registered!");
        } catch (error) {
            setErrors({ general: "An error occurred while submitting the form." });
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            teamName: "",
            selectedModules: "",
            members: [],
        };

        // Validate team name
        if (!teamName.trim()) {
            errors.teamName = "Team name is required.";
            valid = false;
        }

        // Validate selected modules
        if (selectedModules.length === 0) {
            errors.selectedModules = "Please select at least one module.";
            valid = false;
        }

        // Validate team members
        members.forEach((member, index) => {
            const memberErrors: any = {};
            if (!member.name.trim()) memberErrors.name = "Name is required.";
            if (!member.email.trim()) memberErrors.email = "Email is required.";
            if (!member.contact.trim()) memberErrors.contact = "Contact is required.";
            if (!member.cnic.trim()) memberErrors.cnic = "CNIC is required.";

            if (Object.keys(memberErrors).length > 0) {
                errors.members[index] = memberErrors;
                valid = false;
            }
        });

        // Validate team size conflicts for each selected module
        selectedModules.forEach((module) => {
            const moduleData = modules.find((m) => m.name === module);
            if (moduleData) {
                const teamSize = members.length;
                if (teamSize < moduleData.minMembers || teamSize > moduleData.maxMembers) {
                    errors.selectedModules = `Team size must be between ${moduleData.minMembers} and ${moduleData.maxMembers} members for the selected module: ${module}.`;
                    valid = false;
                }
            }
        });

        setFormErrors(errors);
        return valid;
    };

    return (
        <Box sx={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
            <ListItemText primary={'Probattle 2025 / Team Registration'} secondary={'List all your team members here'} />
            <Box component="form">
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Team Name"
                                variant="outlined"
                                required
                                fullWidth
                                value={teamName}
                                onChange={(e) => {
                                    setTeamName(e.target.value);
                                    validateField("teamName", e.target.value);
                                }}
                                error={!!formErrors.teamName}
                                helperText={formErrors.teamName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Select Modules</InputLabel>
                                <Select
                                    multiple
                                    value={selectedModules}
                                    variant="filled"
                                    onChange={handleModuleChange}
                                    required
                                    renderValue={(selected) => (selected as string[]).join(", ")}
                                    error={!!formErrors.selectedModules}
                                >
                                    {modules.map((module) => (
                                        <MenuItem key={module.name} value={module.name}>
                                            <Checkbox checked={selectedModules.includes(module.name)} />
                                            <ListItemText
                                                primary={module.name}
                                                secondary={`Time: ${module.start} to ${module.end} — Members: ${module.minMembers} to ${module.maxMembers}`}
                                            />
                                        </MenuItem>
                                    ))}
                                </Select>
                                {formErrors.selectedModules && (
                                    <Typography color="error" variant="body2">{formErrors.selectedModules}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} variant="inset" />
                    <ListItemText primary={'Team Members'} secondary={'List all your team members here'} />
                    <Grid container>
                        {members.map((member, index) => (
                            <Grid container key={index} spacing={2} style={{ marginTop: '2rem' }}>
                                {["name", "email", "phone", "cnic"].map((field) => (
                                    <Grid item xs={12} sm={6} key={field}>
                                        <TextField
                                            label={field !== "cnic" ? (field.charAt(0).toUpperCase() + field.slice(1)) : field.toUpperCase()}
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={member[field]}
                                            onChange={(e) => {
                                                const updatedMembers = [...members];
                                                updatedMembers[index][field] = e.target.value;
                                                setMembers(updatedMembers);
                                                validateField(field, e.target.value, index);
                                            }}
                                            error={!!formErrors.members[index]?.[field]}
                                            helperText={formErrors.members[index]?.[field]}
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12} display="flex" justifyContent="flex-end">
                                    {members.length > 1 && (
                                        <IconButton color="error" onClick={() => handleRemoveMember(index)}>
                                            <RemoveCircleOutline />
                                        </IconButton>
                                    )}
                                </Grid>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                startIcon={<AddCircleOutline />}
                                onClick={handleAddMember}
                            >
                                Add Teammate
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} variant={"inset"} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={loading}
                        sx={{ py: 1.5 }}
                        onClick={handleSubmit}
                    >
                        {loading ? <CircularProgress size={24} /> : "Register"}
                    </Button>
                    {successMessage && (
                        <Box sx={{ mt: 3 }}>
                            <Typography align="center" color="success.main">
                                {successMessage}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default RegistrationForm;
