import { Dimensions, StyleSheet } from "react-native";

const customWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    flex: 1,
    overflow: "scroll"
  },
  pageText: {
    fontFamily: "outfit-semibold",
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    fontFamily: "outfit-semibold",
    fontSize: 16,
  },
  buttonTwo: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
    marginHorizontal: 16,
    width: customWidth - 32
  },
  flexButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
    marginHorizontal: 16,
    width: "100%"
  },
  buttonTextTwo: {
    fontFamily: "outfit-semibold",
    fontSize: 16,
  },
  buttonThree: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonTextThree: {
    fontFamily: "outfit-semibold",
    fontSize: 16,
  },
  textarea: {
    // maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    fontSize: 18,
    marginVertical: 4,
    // textAlign: 'center'
    fontSize: 16,
  },
  input: {
    // maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    fontSize: 16,
    paddingHorizontal: 15,
    // borderRadius: 8,
    borderWidth: 0,
    marginVertical: 4,
    borderBottomWidth: 1,
    // textAlign: 'center'
  },
  label: {
    fontFamily: "outfit-medium",
    color: "#777",
    fontSize: 14,
    marginTop: 8,
  },
  inputTwo: {
    maxWidth: "80%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 12,
    fontSize: 18,
    textAlign: "center",
  },
  textOne: {
    fontFamily: "outfit-bold",
    fontSize: 40,
  },
  textTwo: {
    fontFamily: "outfit-bold",
    fontSize: 32,
  },
  textThree: {
    fontFamily: "outfit-semibold",
    fontSize: 24,
  },
  textFour: {
    fontFamily: "outfit-semibold",
    fontSize: 20,
  },
  textFive: {
    fontFamily: "outfit-regular",
    fontSize: 18,
  },
  textSix: {
    fontFamily: "outfit-light",
    fontSize: 16,
  },
  textSeven: {
    fontFamily: "outfit-light",
    fontSize: 14,
  },
  textEight: {
    fontFamily: "outfit-regular",
    fontSize: 12,
  },
});
