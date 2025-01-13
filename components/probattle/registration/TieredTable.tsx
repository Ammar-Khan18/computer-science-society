import React, { useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Radio,
} from "@mui/material";
import { Module } from "@/components/probattle/registration/types";
import { useFormState } from "@/zustand/probattle";
import { TieredModules } from "./modules";

interface Tier {
  tier: string;
  tierDescription: string;
  modules: Module[];
}

// Table row for a module (memoized)
const ModuleRow = React.memo(
  ({
    module,
    tier,
    isSelected,
    onSelect,
  }: {
    module: Module;
    tier: string;
    isSelected: boolean;
    onSelect: (tier: string, moduleName: string) => void;
  }) => (
    <TableRow selected={isSelected}>
      <TableCell align="center" width="5%">
        <Radio
          checked={isSelected}
          onChange={() => onSelect(tier, module.name)}
          value={module.name}
        />
      </TableCell>
      <TableCell colSpan={4}>
        <Typography variant="body1">{module.name}</Typography>
      </TableCell>
    </TableRow>
  )
);
ModuleRow.displayName = "ModuleRow";

const TieredModulesTable = () => {
  const selectedModules = useFormState((state: { selectedModules: any; }) => state.selectedModules);
  const setSelectedModule = useFormState((state: { setSelectedModule: any; }) => state.setSelectedModule);

  // Callback to select a module
  const handleSelectModule = useCallback(
    (tier: string, moduleName: string) => {
      setSelectedModule(tier, moduleName);
    },
    [setSelectedModule]
  );

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{
        maxHeight: 500,
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        background: `
          linear-gradient(white 30%, rgba(255, 255, 255, 0)) center top,
          linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom,
          radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)) center top,
          radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
        backgroundAttachment: "local, local, scroll, scroll",
      }}
    >
      {TieredModules.map((tier, tierIndex) => (
        <React.Fragment key={`tier-${tier.name}`}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <TableCell align="center" width="5%"></TableCell>
                <TableCell colSpan={4}>
                  <div>
                    <Typography variant="h6">{tier.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {tier.description}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tier.modules.map((module: Module) => (
                <ModuleRow
                  key={`module-${tier.name}-${module.name}-${module.id}`}
                  module={module}
                  tier={tier.name}
                  isSelected={selectedModules[tier.name] === module.name}
                  onSelect={handleSelectModule}
                />
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      ))}
    </TableContainer>
  );
};

export default TieredModulesTable;
