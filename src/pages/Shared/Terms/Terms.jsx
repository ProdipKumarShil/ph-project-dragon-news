import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur deserunt? Natus cumque fuga aspernatur. Laborum explicabo amet illum rem quo suscipit ducimus vero, earum provident pariatur? Ducimus, porro maiores!</p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;