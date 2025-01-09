"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
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
  Paper,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { firestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { create } from "zustand";

const initialMember = { name: "", email: "", contact: "", cnic: "" };

// Define modules with their respective min and max members
const modules = [
  { name: "Machine Learning", minMembers: 2, maxMembers: 5 },
  { name: "App Development", minMembers: 3, maxMembers: 6 },
  { name: "NLP", minMembers: 2, maxMembers: 4 },
  { name: "Tech Tank", minMembers: 1, maxMembers: 3 },
  { name: "Competitive Programming", minMembers: 2, maxMembers: 2 },
  { name: "Robo Sumo", minMembers: 2, maxMembers: 5 },
];

// Zustand Store
const useRegistrationStore = create((set) => ({
  teamName: "",
  moduleSelected: "",
  baCode: "",
  members: [{ ...initialMember }],
  loading: false,
  successMessage: "",
  errors: {},

  setTeamName: (value) => set({ teamName: value }),
  setModuleSelected: (value) => set({ moduleSelected: value }),
  setBaCode: (value) => set({ baCode: value }),
  setMembers: (members) => set({ members }),
  setLoading: (value) => set({ loading: value }),
  setSuccessMessage: (message) => set({ successMessage: message }),
  setErrors: (errors) => set({ errors }),
}));

const RegistrationForm: React.FC = () => {
  const {
    teamName,
    moduleSelected,
    baCode,
    members,
    loading,
    successMessage,
    errors,
    setTeamName,
    setModuleSelected,
    setBaCode,
    setMembers,
    setLoading,
    setSuccessMessage,
    setErrors,
  } = useRegistrationStore();

  const selectedModule = modules.find((module) => module.name === moduleSelected);

  const validateField = (field, value, index) => {
    const newErrors = { ...errors };

    if (field === "teamName" && !value) {
      newErrors.teamName = "Team Name is required.";
    } else if (field === "moduleSelected" && !value) {
      newErrors.moduleSelected = "Please select a module.";
    } else if (field.includes("member")) {
      const [_, idx, key] = field.split("-");
      const memberIndex = parseInt(idx);

      if (key === "name" && !value) {
        newErrors[`member-${memberIndex}-name`] = "Name is required.";
      } else if (key === "email" && (!value || !/\S+@\S+\.\S+/.test(value))) {
        newErrors[`member-${memberIndex}-email`] = "A valid email is required.";
      } else if (key === "contact" && (!value || value.length < 10)) {
        newErrors[`member-${memberIndex}-contact`] = "A valid contact is required.";
      } else if (key === "cnic" && (!value || value.length < 13)) {
        newErrors[`member-${memberIndex}-cnic`] = "A valid CNIC is required.";
      } else {
        delete newErrors[field];
      }
    } else {
      delete newErrors[field];
    }

    setErrors(newErrors);
  };

  const validateMemberCount = () => {
    const newErrors = { ...errors };
    if (selectedModule) {
      if (members.length < selectedModule.minMembers) {
        newErrors.memberCount = `At least ${selectedModule.minMembers} team members required.`;
      } else if (members.length > selectedModule.maxMembers) {
        newErrors.memberCount = `No more than ${selectedModule.maxMembers} team members allowed.`;
      } else {
        delete newErrors.memberCount;
      }
    }
    setErrors(newErrors);
  };

  const handleAddMember = () => {
    if (selectedModule && members.length >= selectedModule.maxMembers) {
      setErrors({
        ...errors,
        memberCount: `No more than ${selectedModule.maxMembers} team members allowed.`,
      });
      return;
    }
    setMembers([...members, { ...initialMember }]);
    validateMemberCount();
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
    validateMemberCount();
  };

  const handleSubmit = async () => {
    const validationErrors = {};

    if (!teamName) validationErrors["teamName"] = "Team Name is required.";
    if (!moduleSelected) validationErrors["moduleSelected"] = "Please select a module.";

    if (selectedModule) {
      if (members.length < selectedModule.minMembers) {
        validationErrors.memberCount = `At least ${selectedModule.minMembers} team members required.`;
      }
      if (members.length > selectedModule.maxMembers) {
        validationErrors.memberCount = `No more than ${selectedModule.maxMembers} team members allowed.`;
      }
    }

    members.forEach((member, index) => {
      if (!member.name) validationErrors[`member-${index}-name`] = "Name is required.";
      if (!member.email || !/\S+@\S+\.\S+/.test(member.email))
        validationErrors[`member-${index}-email`] = "A valid email is required.";
      if (!member.contact || member.contact.length < 10)
        validationErrors[`member-${index}-contact`] = "A valid contact is required.";
      if (!member.cnic || member.cnic.length < 13)
        validationErrors[`member-${index}-cnic`] = "A valid CNIC is required.";
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const participantsRef = collection(firestore, "participants");
      const data = { teamName, moduleSelected, baCode, members };
      await addDoc(participantsRef, data);

      setSuccessMessage("Successfully Registered!");
      setTeamName("");
      setModuleSelected("");
      setBaCode("");
      setMembers([{ ...initialMember }]);
      setErrors({});
    } catch (error) {
      console.error("Error registering participant:", error);
      alert("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <Card elevation={3} sx={{ borderRadius: 4, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Team Registration
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Team Name"
                variant="outlined"
                fullWidth
                value={teamName}
                onChange={(e) => {
                  setTeamName(e.target.value);
                  validateField("teamName", e.target.value);
                }}
                error={!!errors.teamName}
                helperText={errors.teamName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Module Selected</InputLabel>
                <Select
                  value={moduleSelected}
                  onChange={(e) => {
                    setModuleSelected(e.target.value);
                    validateField("moduleSelected", e.target.value);
                    validateMemberCount();
                  }}
                  label="Module Selected"
                  error={!!errors.moduleSelected}
                >
                  {modules.map((module) => (
                    <MenuItem key={module.name} value={module.name}>
                      {module.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.memberCount && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                  {errors.memberCount}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="BA Code (Optional)"
                variant="outlined"
                fullWidth
                value={baCode}
                onChange={(e) => setBaCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Team Members</Typography>
            </Grid>
            {members.map((member, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{ padding: "16px", marginBottom: "16px" }}
              >
                <Grid container spacing={2}>
                  {["name", "email", "contact", "cnic"].map((field) => (
                    <Grid item xs={12} sm={6} key={field}>
                      <TextField
                        label={field.charAt(0).toUpperCase() + field.slice(1)}
                        variant="outlined"
                        fullWidth
                        value={member[field]}
                        onChange={(e) => {
                          const updatedMembers = [...members];
                          updatedMembers[index][field] = e.target.value;
                          setMembers(updatedMembers);
                          validateField(`member-${index}-${field}`, e.target.value);
                        }}
                        error={!!errors[`member-${index}-${field}`]}
                        helperText={errors[`member-${index}-${field}`]}
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
              </Paper>
            ))}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<AddCircleOutline />}
                onClick={handleAddMember}
                fullWidth
              >
                Add Teammate
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </Grid>
            {successMessage && (
              <Grid item xs={12}>
                <Typography align="center" color="success.main">
                  {successMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegistrationForm;
