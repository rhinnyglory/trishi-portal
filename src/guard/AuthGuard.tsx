import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard: React.FunctionComponent<any> = props => {
    const { children } = props;
    
  return (
    <div>AuthGuard</div>
  )
}

export default AuthGuard