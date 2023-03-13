import { LockRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const PasswordTextField = (p: TextFieldProps) => {
  return (
    <TextField
      type="password"
      label="Password"
      placeholder="* * * * * * * *"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockRounded />
          </InputAdornment>
        ),
      }}
      {...p}
    />
  );
};
