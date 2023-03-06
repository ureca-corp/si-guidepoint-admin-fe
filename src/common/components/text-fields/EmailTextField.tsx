import { MailOutlineRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const EmailTextField = (p: TextFieldProps) => {
  return (
    <TextField
      label={"Email"}
      placeholder={"email@example.com"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailOutlineRounded />
          </InputAdornment>
        ),
      }}
      {...p}
    />
  );
};
