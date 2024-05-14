import { StyleSheet, Font } from "@dna/react-pdf";
// const path = `http://form-contract.development.local/` || "http://form-contract.development.local/";
// const path = `http://localhost:3000/`
const path = `http://form-contract.development.local/`



Font.register({
  family: "krona",
  src: "http://fonts.gstatic.com/s/kronaone/v4/ix3TbrGcGYAHLWi4hTTy1KCWcynf_cDxXwCLxiixG1c.ttf",
});


Font.register({
  family: "Karla",
  fonts: [
    {
      fontWeight: "normal",
      src: `${path}font/Karla.ttf`,
    },
    {
      fontWeight: "bold",
      src: `${path}font/Karla-Bold.ttf`,
    },
  ],
});

export const docStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    padding: 40,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  main: {
    height: "100vh",
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "column",
  },
  img: {
    display: "flex",
    width: "100px",
  },
  headerText: {
    fontFamily: "krona",
    fontSize: 12,
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
  headerSubText: {
    fontFamily: "krona",
    fontSize: 8,
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
  fontKarla: {
    fontFamily: "Karla",
  },
  fontKarlaBold: {
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  fontKrona: {
    fontFamily: "krona",
  },
});
