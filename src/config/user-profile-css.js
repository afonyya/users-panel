export const cssUserProfile = `
  * {
    outline: none;
    user-select: none;
  }

  main {
    background: #fbfbfb;
    padding: 48px 32px 32px;
    color: #09b;
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

  input:disabled {
    background: transparent;
    border: none;
    color: #09b;
  }

  #edit {
    position: absolute;
    top: 4px;
    right: 36px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    border-radius: 50%;
    font-size: 24px;
  }
  #edit:disabled {
    cursor: not-allowed;
  }

  #delete {
    position: absolute;
    top: 4px;
    right: 4px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    border-radius: 50%;
    font-size: 24px;
  }
  #delete:disabled {
    cursor: not-allowed;
  }

  #submit {
    margin-top: 24px;
    border: 1px solid #777;
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
