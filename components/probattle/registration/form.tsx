"use client";
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
import { useRegistrationStore } from "@/app/zustand/probattle";
import { detectClashes } from "./detectclashes";

// Module Data with Time Ranges
const modules = [
    { name: "Machine Learning", minMembers: 2, maxMembers: 5, start: "10:00", end: "12:00" },
    { name: "App Development", minMembers: 3, maxMembers: 6, start: "11:30", end: "13:30" },
    { name: "NLP", minMembers: 2, maxMembers: 4, start: "14:00", end: "16:00" },
    { name: "Tech Tank", minMembers: 1, maxMembers: 3, start: "09:00", end: "10:30" },
    { name: "Competitive Programming", minMembers: 2, maxMembers: 2, start: "12:00", end: "14:00" },
    { name: "Robo Sumo", minMembers: 2, maxMembers: 5, start: "15:00", end: "17:00" },
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
                    <Divider sx={{ my: 4 }} variant={"inset"}/>
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
