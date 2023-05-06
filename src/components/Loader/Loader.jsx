import { Grid } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => {
  return (
    <>
      <Grid
        color="#00BFFF"
        height={380}
        width={380}
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: '1',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '20px',
          border: '4px solid bisque',
          zIndex: '2',
        }}
      />
    </>
  );
};
