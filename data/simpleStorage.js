let globalValue = "";

export const getValue = () => {
  return globalValue;
}
export const setValue = (value) => {
  globalValue = value;
}

// const _getValue = getValue;
// export { _getValue as getValue };
// const _setValue = setValue;
// export { _setValue as setValue };
