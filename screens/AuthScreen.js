import { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HorizontalDivider from "../components/HorizontalDivider";
import InputCustom from "../components/InputCustom";
import { signUp, login } from "../Features/Auth";
import { colors } from "../Styles/Colors";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import loginValidationSchema from "../Utils/validationYup";
const LoginScreen = () => {
  const [registroVista, setRegistroVista] = useState(false);
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();

  const handleSignup = () => {
    /* const validateEmail = schemaEmail.validate({ email: email })
        const validatePassword = schemaPassword.validate({ password: password })
        console.log(validateEmail);
        console.log(validatePassword)
        if (validateEmail.error) setEmailError(validateEmail.error.message)
        else if (validatePassword.error) setPasswordError(validatePassword.error.message)
        else { */
    setEmailError("");
    setPasswordError("");
    if (password === confirmPassword) {
      console.log("Se registra!");
      dispatch(signUp({ email: email, password: password }));
    } else {
      setConfirmPasswordError("Los passwords deben coincidir");
    }
  };

  // }

  const handleLogin = () => {
    const validateEmailAndPassword = loginValidationSchema.validate({
      email,
      password,
    });
    console.log(validateEmailAndPassword);

    /* const validateEmail = schemaEmail.validate({ email: email })
        const validatePassword = schemaPassword.validate({ password: password })
        if (validateEmail.error) setEmailError(validateEmail.error.message)
        else if (validatePassword.error) setPasswordError(validatePassword.error.message)
        else {
            setEmailError("");
            setPasswordError("");
            console.log("Se registra!");
            dispatch(login({ email: email, password: password }));
        } */
  };

  const handleSubmit = (values) => {
    console.log(values);
    console.log("Se submiteo un form válido");
    if (registroVista) {
      if (values.password === values.confirmPassword) {
        console.log("Se registra!");
        dispatch(signUp({ email: values.email, password: values.password }));
      } else {
        setConfirmPasswordError("Los passwords deben coincidir");
      }
    } else {
      console.log("Entra al login");
      dispatch(login({ email: values.email, password: values.password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={loginValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, errors, handleSubmit, values, handleBlur }) => (
            <>
              <InputCustom
                label="Email"
                password={false}
                onChange={handleChange("email")}
                value={values.email}
                error={errors.email}
                onBlur={handleBlur("email")}
              />
              <InputCustom
                label="Password"
                password={true}
                onChange={handleChange("password")}
                value={values.password}
                error={errors.password}
                onBlur={handleBlur("password")}
              />
              {registroVista && (
                <InputCustom
                  label="Confirm password"
                  password={true}
                  onChange={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  onBlur={handleBlur("confirmPassword")}
                  error={confirmPasswordError}
                />
              )}
              {registroVista ? (
                <Button title="Signup" onPress={handleSubmit} />
              ) : (
                <Button title="Login" onPress={handleSubmit} />
              )}
              <View style={styles.textContainer}>
                {registroVista ? (
                  <TouchableOpacity onPress={() => setRegistroVista(false)}>
                    <Text>
                      ¿Ya tienes cuenta? <Text style={styles.link}>Login</Text>
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setRegistroVista(true)}>
                    <Text>
                      ¿No tienes cuenta?{" "}
                      <Text style={styles.link}>¡Crea una!</Text>
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  content: {
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: colors.primary,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 24,
    textAlign: "center",
    color: colors.light,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 10,
    fontFamily: "LatoRegular",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  link: {
    color: colors.light,
    textDecorationLine: "underline",
  },
});
