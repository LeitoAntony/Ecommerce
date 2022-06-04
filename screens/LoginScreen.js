import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import HorizontalDivider from "../components/HorizontalDivider";
import InputCustom from "../components/InputCustom";
import { signUp } from "../Features/Auth";
import { colors } from "../Styles/Colors";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const [registroVista, setRegistroVista] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (password === passwordConfirm) {
      dispatch(signUp({ email: email, password : password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
        <InputCustom
          label="Email"
          password={false}
          onChange={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <HorizontalDivider />
        <InputCustom
          label="Password"
          password={true}
          onChange={setPassword}
          value={password}
        />
        <HorizontalDivider />
        <InputCustom
          label="Confirmar Password"
          password={true}
          onChange={setPasswordConfirm}
          value={passwordConfirm}
        />
        <Button title="SingUp" onPress={handleSignUp} />
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
});
