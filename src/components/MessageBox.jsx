// MessageBox component

const MessageBox = () => {
  const boxstyle = {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '407px',
    height: '310px',
    borderWidth: '9px',
    borderStyle: 'solid',
    borderColor: '#CB0000',
    borderRadius: '37px',

    boxShadow: '0 4px 4px #00000040',
    padding: '100px 0px 0px 43px',
  }




  return <div style={boxstyle}>
    <h1 className="text-[32px]">From. dd </h1>
  </div>;
};

export default MessageBox;
