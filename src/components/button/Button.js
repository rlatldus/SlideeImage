import * as Styled from "./Style";

const SubmitButton = ({ children, ...rest }) => {
  return (
    <Styled.ButtonBg>
      <Styled.ButtonShadow {...rest}>
        <Styled.ButtonCont {...rest} onClick={onclick} type="submit">
          {children}
        </Styled.ButtonCont>
      </Styled.ButtonShadow>
    </Styled.ButtonBg>
  );
};

const Button = ({ children, onClick, ...rest }) => {
  return (
    <Styled.ButtonBg>
      <Styled.ButtonShadow {...rest}>
        <Styled.ButtonCont onClick={onClick} {...rest}>
          {children}
        </Styled.ButtonCont>
      </Styled.ButtonShadow>
    </Styled.ButtonBg>
  );
};

export { Button, SubmitButton };
