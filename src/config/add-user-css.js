export const cssAddUser = `
  * {
    outline: none;
    user-select: none;
  }

  main {
    background: #09b;
    padding: 48px 32px 32px;
    color: #fbfbfb;
    box-sizing: border-box;
    position: relative;
  }

  div+div {
    margin-top: 16px;
  }

  label {
    display: flex;
    justify-content: space-between;
  }

  input {
    font-size: 16px;
  }

  #submit {
    margin-top: 24px;
    color: #fbfbfb;
    border: 1px solid #f00;
    border-radius: 0;
    padding: 4px 8px;
    background: transparent;
    cursor: pointer;
    font-size: 24px;
  }
  #submit:disabled {
    cursor: not-allowed;
  }
`;
