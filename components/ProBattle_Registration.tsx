"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Grid2,
  TextField,
  Button,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { firestore } from "@/firebase"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore";

interface Member {
  name: string;
  email: string;
  contact: string;
  cnic: string;
}

const RegistrationForm: React.FC = () => {
  const [teamName, setTeamName] = useState<string>("");
  const [moduleSelected, setModuleSelected] = useState<string>("");
  const [baCode, setBaCode] = useState<string>("");
  const [numMembers, setNumMembers] = useState<number>(1);
  const [members, setMembers] = useState<Member[]>([
    { name: "", email: "", contact: "", cnic: "" },
  ]);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validate Fields
  const validateFields = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!teamName) newErrors.teamName = "Team Name is required.";
    if (!moduleSelected) newErrors.moduleSelected = "Module is required.";

    members.forEach((member, index) => {
      if (!member.name) newErrors[`member-${index}-name`] = `Member ${index + 1} name is required.`;
      if (!member.email) newErrors[`member-${index}-email`] = `Member ${index + 1} email is required.`;
      if (!member.contact) newErrors[`member-${index}-contact`] = `Member ${index + 1} contact is required.`;
      if (!member.cnic) newErrors[`member-${index}-cnic`] = `Member ${index + 1} CNIC is required.`;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNumMembersChange = (event: SelectChangeEvent<number>) => {
    const value = parseInt(event.target.value.toString(), 10);
    setNumMembers(value);

    const newMembers = Array.from({ length: value }, (_, index) => ({
      name: members[index]?.name || "",
      email: members[index]?.email || "",
      contact: members[index]?.contact || "",
      cnic: members[index]?.cnic || "",
    }));
    setMembers(newMembers);
  };

  const handleMemberChange = (index: number, field: keyof Member, value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    try {
      const participantsRef = collection(firestore, "participants");

      const data = {
        teamName,
        moduleSelected,
        baCode, // BA Code is now optional
        members,
      };

      await addDoc(participantsRef, data);

      setSuccessMessage("Successfully Registered!");

      // Clear form fields
      setTeamName("");
      setModuleSelected("");
      setBaCode("");
      setNumMembers(1);
      setMembers([{ name: "", email: "", contact: "", cnic: "" }]);
      setErrors({});
    } catch (error) {
      console.error("Error registering participant:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <Paper
      sx={{
        padding: 3,
        width: "80%",
        margin: "20px auto", // Adds space above and below the Paper
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align content to the top
        alignItems: "center", // Center horizontally
      }}
    >
      <Grid2 container spacing={3} sx={{ justifyContent: "center" }}>
        {/* Team Name */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Team Name"
            variant="outlined"
            fullWidth
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            error={!!errors.teamName}
            helperText={errors.teamName}
          />
        </Grid2>

        {/* Module Selected */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth variant="outlined" error={!!errors.moduleSelected}>
            <InputLabel>Module Selected</InputLabel>
            <Select
              label="Module Selected"
              value={moduleSelected}
              onChange={(e) => setModuleSelected(e.target.value)}
            >
              {[
                "Machine Learning",
                "App Development",
                "Natural Language Processing (NLP)",
                "Tech Tank",
                "Competitive Programming",
                "Pseudocode",
                "Robo Sumo",
                "Robo Soccer",
                "Line Following Robot",
                "Database Design",
                "Cybersecurity",
                "Business Intelligence",
                "UI/UX",
                "Blockchain Trading",
                "Console Gaming",
                "LED Coding",
              ].map((module) => (
                <MenuItem key={module} value={module}>
                  {module}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="caption" color="error">
              {errors.moduleSelected}
            </Typography>
          </FormControl>
        </Grid2>

        {/* BA Code (Optional) */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            label="BA Code (Optional)"
            variant="outlined"
            fullWidth
            value={baCode}
            onChange={(e) => setBaCode(e.target.value)}
            error={!!errors.baCode}
            helperText={errors.baCode}
          />
        </Grid2>

        {/* Number of Members */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Number of Members</InputLabel>
            <Select
              label="Number of Members"
              value={numMembers}
              onChange={handleNumMembersChange}
            >
              {[1, 2, 3, 4].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        {/* Member Details */}
        {members.map((member, index) => (
          <Grid2 size={{ xs: 12 }} key={index}>
            <Typography variant="h6" gutterBottom>
              Member {index + 1} Details
            </Typography>

            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={member.name}
              onChange={(e) => handleMemberChange(index, "name", e.target.value)}
              error={!!errors[`member-${index}-name`]}
              helperText={errors[`member-${index}-name`]}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={member.email}
              onChange={(e) => handleMemberChange(index, "email", e.target.value)}
              error={!!errors[`member-${index}-email`]}
              helperText={errors[`member-${index}-email`]}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              value={member.contact}
              onChange={(e) => handleMemberChange(index, "contact", e.target.value)}
              error={!!errors[`member-${index}-contact`]}
              helperText={errors[`member-${index}-contact`]}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="CNIC"
              variant="outlined"
              fullWidth
              value={member.cnic}
              onChange={(e) => handleMemberChange(index, "cnic", e.target.value)}
              error={!!errors[`member-${index}-cnic`]}
              helperText={errors[`member-${index}-cnic`]}
              sx={{ marginBottom: 2 }}
            />
          </Grid2>
        ))}

        {/* Submit Button */}
        <Grid2 size={{ xs: 12 }}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Register
          </Button>
        </Grid2>

        {/* Success Message */}
        {successMessage && (
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <Typography variant="h6" color="success.main">
              {successMessage}
            </Typography>
          </Grid2>
        )}
      </Grid2>
    </Paper>
  );
};

export default RegistrationForm;
