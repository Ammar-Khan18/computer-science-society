"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Grid2,
  TextField,
  Button,
  Paper,
  Typography,
  Input,
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
  const [societyCode, setSocietyCode] = useState<string>("");
  const [numMembers, setNumMembers] = useState<number>(1);
  const [members, setMembers] = useState<Member[]>([
    { name: "", email: "", contact: "", cnic: "" },
  ]);
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validate Fields
  const validateFields = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!teamName) newErrors.teamName = "Team Name is required.";
    if (!moduleSelected) newErrors.moduleSelected = "Module is required.";
    if (!baCode) newErrors.baCode = "BA Code is required.";
    if (!societyCode) newErrors.societyCode = "Society Code is required.";
    if (!paymentReceipt) newErrors.paymentReceipt = "Payment receipt is required.";

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

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPaymentReceipt(file);
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    try {
      const participantsRef = collection(firestore, "participants");

      const data = {
        teamName,
        moduleSelected,
        baCode,
        societyCode,
        members,
        paymentReceipt: paymentReceipt ? paymentReceipt.name : "",
        timestamp: new Date(),
      };

      await addDoc(participantsRef, data);

      setSuccessMessage("Successfully Registered!");

      // Clear form fields
      setTeamName("");
      setModuleSelected("");
      setBaCode("");
      setSocietyCode("");
      setNumMembers(1);
      setMembers([{ name: "", email: "", contact: "", cnic: "" }]);
      setPaymentReceipt(null);
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
    margin: "0 auto",
    height: "100vh", // Set the height of the Paper to fill the viewport
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  }}
>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfUJWWMYXb2rOLFVk7Ydx-DvcxPEdLDJM6GX0xBTKidxTE_JQ/viewform?embedded=true"
    width="640"
    height="800" // Adjust height for better fit
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    style={{
      border: "none",
      maxWidth: "100%",
      overflow: "hidden",  // Hide scrollbars
    }}
    title="Google Form"
  >
    Loading…
  </iframe>
</Paper>

  );
};

export default RegistrationForm;
