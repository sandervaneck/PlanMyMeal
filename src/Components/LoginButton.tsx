import { Button, Dialog, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Account, AccountInput } from "../graphql/schema";
import { useState } from "react";
import { FormField } from "./FormField";
import { emptyAccountInput } from "../FullPage/emptyForms";

interface LoginButtonProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  user: Account | undefined;
  setUser: (value: Account) => void;
}

interface DialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setUser: (a: Account) => void;
}

interface LoginTabsProps {
  value: number;
  setValue: (value: number) => void;
}

type LoginForm = {
  username: string;
  password: string;
};

interface LoginFieldProps {
  form: LoginForm;
  setForm: (value: LoginForm) => void;
  setUser: (a: Account) => void;
}

interface SignUpFieldProps {
  form: AccountInput;
  setForm: (f: AccountInput) => void;
  setUser: (a: Account) => void;
}

export const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { user, setUser, open, setOpen } = props;
  return (
    <Button
      onClick={() => {
        setOpen(true);
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Log in
      </Typography>
    </Button>
  );
};

export const LoginDialog: React.FC<DialogProps> = (props) => {
  const { open, setOpen, setUser } = props;
  const [value, setValue] = useState(0);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState<AccountInput>(emptyAccountInput);
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDialog-paper": {
          width: "300px", // Adjust width as needed
          padding: "16px", // Optional padding for better spacing
        },
      }}
    >
      <Button onClick={() => setOpen(false)}>Close</Button>
      <LoginTabs value={value} setValue={setValue} />
      {value === 0 && (
        <LoginField form={loginForm} setForm={setLoginForm} setUser={setUser} />
      )}
      {value === 1 && (
        <SignUpField
          form={signupForm}
          setForm={setSignupForm}
          setUser={setUser}
        />
      )}
    </Dialog>
  );
};

const LoginTabs: React.FC<LoginTabsProps> = (props) => {
  const { value, setValue } = props;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab
        // icon={<PenAndPaperIcon />}
        label="Log In"
      />
      <Tab
        // icon={<ImageIcon />}
        label="Sign Up"
      />
    </Tabs>
  );
};

const LoginField: React.FC<LoginFieldProps> = (props) => {
  const { form, setForm, setUser } = props;
  const login = () => {
    console.log(form);
  };
  return (
    <Stack direction={"column"} spacing={2}>
      <FormField
        label="Username or email"
        value={form.username}
        setValue={(e) => setForm({ ...form, username: e })}
      />
      <FormField
        label="Password"
        value={form.password}
        setValue={(e) => setForm({ ...form, password: e })}
      />
      <Button onClick={() => login()}>Log In</Button>
    </Stack>
  );
};

const SignUpField: React.FC<SignUpFieldProps> = (props) => {
  const { form, setForm, setUser } = props;
  const login = () => {
    console.log(form);
  };
  return (
    <Stack direction={"column"} spacing={2}>
      <FormField
        label="Username"
        value={form.username}
        setValue={(e) => setForm({ ...form, username: e })}
      />
      <FormField
        label="Email"
        value={form.email ? form.email : ""}
        setValue={(e) => setForm({ ...form, email: e })}
      />
      <FormField
        label="Password"
        value={form.password}
        setValue={(e) => setForm({ ...form, password: e })}
      />
      <FormField
        label="Bio"
        value={form.bio ? form.bio : ""}
        setValue={(e) => setForm({ ...form, bio: e })}
      />
      <FormField
        label="Diets (seperate with comma)"
        multiline
        value={form.diets ? String(form.diets) : ""}
        setValue={(e) => setForm({ ...form, diets: e.split(", ") })}
      />
      <FormField
        label="Phone Number"
        value={form.phone ? form.phone : ""}
        setValue={(e) => setForm({ ...form, phone: e })}
      />
      <Button onClick={() => login()}>Sign Up</Button>
    </Stack>
  );
};
