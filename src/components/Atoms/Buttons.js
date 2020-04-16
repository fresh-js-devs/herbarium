import styled from "@emotion/styled";

/**
 * FEEDBACK: Bylo by dobre pouzit styled zaklad a specificke veci napr. ci je to BackButton, upravit pomoci props
 * Je to dost redundantni
 */
export const Button = styled.button({
  minWidth: "70px",
  minHeight: "50px",
  backgroundColor: "#9ed166",
  color: "#526e35",
  borderRadius: "25px",
  border: "2px solid #526e35",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  verticalAlign: "center",
  fontWeight: "bold",
});

export const BackButton = styled.button({
  minWidth: "70px",
  minHeight: "50px",
  backgroundColor: "#9ed166",
  color: "#526e35",
  borderRadius: "25px",
  border: "2px solid #526e35",
  textAlign: "center",
  verticalAlign: "center",
  fontWeight: "bold",
  marginLeft: "5vw",
  justifySelf: "stretch"
});
