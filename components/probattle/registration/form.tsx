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
  Checkbox,
  ListItemText,
  Divider,
  InputAdornment,
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

  const clashes = detectClashes(modules, selectedModules);

  const handleModuleChange = (event: { target: { value: unknown } }) => {
    const value = event.target.value as string[];
    setSelectedModules(value);
  };

  const handleAddMember = () => {
    setMembers([...members, { name: "", email: "", contact: "", cnic: "" }]);
  };

  const handleRemoveMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    // Add your validation and submission logic here
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <ListItemText primary={'Probattle 2025 / Team Registration'} secondary={'List all your team members here'} style={{ marginBottom: '0rem' }} />
      <Box component="form" action={console.log}>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3} style={{}}>
            <Grid item xs={12}>
              <TextField
                label="Team Name"
                variant="outlined" required
                fullWidth
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                error={!!errors.teamName}
                helperText={errors.teamName}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Modules</InputLabel>
                <Select
                  multiple fullWidth
                  value={selectedModules} variant="filled"
                  onChange={handleModuleChange} required
                  renderValue={(selected) => (selected as string[]).join(", ")}
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
              </FormControl>
              {clashes.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography color="error" variant="body2">
                    Possible time clashes found:
                  </Typography>
                  <List dense>
                    {clashes.map((clash, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={<Typography color="error" variant="body2">{`· ${clash.module1} and ${clash.module2} overlap by ${clash.overlap}`}</Typography>} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} variant="inset" />
          <ListItemText primary={'Team Members'} secondary={'List all your team members here'} style={{ marginBottom: '0rem' }} />
          <Grid container>
            {members.map((member, index) => (
              <Grid container key={index} spacing={2} style={{ marginTop: '2rem' }}>
                {["name", "email", "phone", "cnic"].map((field) => (
                  <Grid item xs={12} sm={6} key={field}>
                    <TextField
                      label={field !== "cnic" ? (field.charAt(0).toUpperCase() + field.slice(1)) : field.toUpperCase()}
                      variant="outlined"
                      fullWidth required
                      {...(field === "phone" ? { slotProps: { input: { startAdornment: <InputAdornment position="start">+92</InputAdornment> } } } : {})}
                      value={member[field]}
                      onChange={(e) => {
                        const updatedMembers = [...members];
                        updatedMembers[index][field] = e.target.value;
                        setMembers(updatedMembers);
                      }}
                    />                </Grid>
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
          <Divider sx={{ my: 4 }} />
          <Button
            variant="contained"
            color="primary" type="submit"
            fullWidth
            disabled={loading}
            sx={{ py: 1.5 }}
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
