import { StyleSheet, Font } from "@react-pdf/renderer";



Font.register({
  family: "krona",
  src: "http://fonts.gstatic.com/s/kronaone/v4/ix3TbrGcGYAHLWi4hTTy1KCWcynf_cDxXwCLxiixG1c.ttf",
});

// Font.register({
//     family: "karla",
//     src: "http://fonts.gstatic.com/s/karla/v5/Vu9Dx8oyiuqEkuIyR3OPDQ.ttf",
// });

// Font.register({
//   family: "karla",
//   src: "http://fonts.gstatic.com/s/karla/v5/Vu9Dx8oyiuqEkuIyR3OPDQ.ttf",
// });

// Font.register({
//   family: "krona",
//   src: "http://localhost:3000/font/krona.ttf",
// });

// Font.register({
//   family: "krona",
//   src: "http://localhost:3000/font/krona.ttf",
// });


Font.register({
    family: "Karla",
    fonts: [
      {
        fontWeight: 'normal',
        src: 'src: "http://localhost:3000/font/Karla.ttf",'
      },
      {
        fontWeight: 'bold',
        src: 'src: "http://localhost:3000/font/Karla-Bold.ttf",'
      },
    ]
});





export const docStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    display: "flex",
    flex: 1,
    padding: 30,
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
