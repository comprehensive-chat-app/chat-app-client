import * as Styled from './Styles';

type Props = {
  nickname: string;
  text: string;
};

export const MessageItem = ({ nickname, text }: Props) => {
  return (
    <div>
      <Styled.Nickname>@{nickname}</Styled.Nickname>
      <br />
      {text}
    </div>
  );
};
