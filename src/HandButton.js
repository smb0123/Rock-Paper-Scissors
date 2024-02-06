import HandIcon from './HandIcon';
import backgroundImg from './assets/purple.svg';

const style = {
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

// 인라인 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button style={style} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
