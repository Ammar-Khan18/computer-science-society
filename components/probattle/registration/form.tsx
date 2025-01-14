"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Box,
    Grid,
    TextField,
    Button,
    Typography,
    CircularProgress,
    IconButton,
    Divider,
    InputAdornment,
    ListItemText,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useFormState, useRegistrationStore } from "@/zustand/probattle";
import TieredModulesTable from "./TieredTable";
import { TieredModules } from "./modules";
import { purple } from "@mui/material/colors";
import { inputBaseClasses } from "@mui/material/InputBase";
import { TextFieldProps } from "@mui/material/TextField";
import { firestore } from "@/firebase";

const RegistrationForm: React.FC = () => {
    const InputLabelProps: TextFieldProps["InputLabelProps"] = {
        shrink: true,
        sx: {
            color: "text.primary",
            transform: "translate(0, 1.5px) scale(0.8)",
            letterSpacing: 1,
            "&.Mui-focused:not(.Mui-error)": {
                color: "text.primary",
            },
        },
    };
    const InputProps: TextFieldProps["InputProps"] = {
        disableUnderline: true,
        sx: {
            backgroundColor: "grey.200",
            transition: "0.3s",
            "label + &": {
                marginTop: "24px",
            },
            [`&.${inputBaseClasses.focused}`]: {
                backgroundColor: "common.white",
                boxShadow: `0 0 0 2px ${purple[700]}`,
            },
            [`&.${inputBaseClasses.error}`]: {
                backgroundColor: "#fff0f0",
                [`&.${inputBaseClasses.focused}`]: {
                    boxShadow: `0 0 0 2px #ff6b81`,
                },
            },
            [`&.${inputBaseClasses.disabled}`]: {
                backgroundColor: "grey.50",
            },
            [`& .${inputBaseClasses.input}`]: {
                padding: "1rem",
            },
        },
    };
    const {
        teamName,
        members,
        loading,
        successMessage,
        errors,
        setTeamName,
        setMembers,
        setLoading,
        setSuccessMessage,
        setErrors,
    } = useRegistrationStore();
    const selectedModules = useFormState(state => state.selectedModules);
    const [formErrors, setFormErrors] = useState<any>({
        teamName: "",
        members: [],
        selectedModules: "",
    });
    const validateField = useCallback((field: string, value: string, memberIndex?: number) => {
        setFormErrors((prevErrors) => {
            const errors = { ...prevErrors };
            switch (field) {
                case "teamName":
                    errors.teamName = value.trim() ? "" : "Team name is required.";
                    break;
                case "selectedModules":
                    errors.selectedModules =
                        Object.values(selectedModules).length === 0
                            ? "Please select at least one module."
                            : "";
                    break;
                case "name":
                case "email":
                case "contact":
                case "cnic":
                    if (memberIndex !== undefined) {
                        const member = members[memberIndex];
                        errors.members[memberIndex] = errors.members[memberIndex] || {};
                        errors.members[memberIndex][field] = value.trim()
                            ? ""
                            : `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                    }
                    break;
                default:
                    break;
            }
            return errors;
        });
    }, [members, selectedModules]);

    const handleAddMember = useCallback(() => {
        setMembers((prev) => [...prev, { name: "", email: "", contact: "", cnic: "" }]);
    }, [setMembers]);

    const handleRemoveMember = useCallback(
        (index: number) => {
            setMembers((prev) => prev.filter((_, i) => i !== index));
        },
        [setMembers]
    );

    const validateModuleSize = useCallback(() => {
        setFormErrors((prevErrors) => {
            const errors = { ...prevErrors };
            const teamSize = members.length;

            for (const [tier, moduleName] of Object.entries(selectedModules)) {
                const tierData = TieredModules.find((t) => t.name === tier);
                if (!tierData) continue;

                const moduleData = tierData.modules.find((m) => m.name === moduleName);
                if (!moduleData) continue;

                if (teamSize < moduleData.minMembers || teamSize > moduleData.maxMembers) {
                    errors.selectedModules = `Team size must be between ${moduleData.minMembers} and ${moduleData.maxMembers} for the selected module: ${moduleName}.`;
                    break;
                } else {
                    errors.selectedModules = "";
                }
            }
            return errors;
        });
    }, [members.length, selectedModules]);

    useEffect(() => {
        validateModuleSize();
    }, [validateModuleSize]);

    const phoneProps = useMemo(
        () => ({
            slotProps: {
                input: {
                    startAdornment: <InputAdornment position="start">+92</InputAdornment>,
                },
            },
        }),
        []
    );

    const validateForm = useCallback(() => {
        let valid = true;
        const errors = {
            teamName: "",
            selectedModules: "",
            members: [],
        };

        if (!teamName.trim()) {
            errors.teamName = "Team name is required.";
            valid = false;
        }

        if (Object.values(selectedModules).length === 0) {
            errors.selectedModules = "Please select at least one module.";
            valid = false;
        }

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

        validateModuleSize();
        setFormErrors(errors);
        return valid;
    }, [teamName, selectedModules, members, validateModuleSize]);

    const handleSubmit = useCallback(async () => {
        if (!validateForm()) return;

        setLoading(true);
        try {
            setSuccessMessage("Team successfully registered!");
        } catch (error) {
            setErrors({ general: "An error occurred while submitting the form." });
        } finally {
            setLoading(false);
        }
    }, [validateForm, setLoading, setSuccessMessage, setErrors]);

    console.log('data');
    return (
        <Box sx={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
            <ListItemText primary={'Probattle 2025 / Team Registration'} secondary={'List all your team members here'} />
            <Box onSubmit={(e) => {
                e.preventDefault();
                const valid = validateForm();
                if // evertthing valid and no errors, save form to firebase 
            }}>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Team Name"
                                variant="standard"
                                margin={"normal"}
                                required
                                InputLabelProps={InputLabelProps}
                                InputProps={InputProps}
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
                            <TieredModulesTable />
                            {formErrors.selectedModules && (
                                <Typography color="error" variant="body2">{formErrors.selectedModules}</Typography>
                            )}
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
                                            fullWidth
                                            variant="standard"
                                            margin={"normal"}
                                            required
                                            InputLabelProps={InputLabelProps}
                                            InputProps={InputProps}
                                            {...(field === "phone" ? phoneProps : {})}
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
        </Box >
    );
};

export default RegistrationForm;