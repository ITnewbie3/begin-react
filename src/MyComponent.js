// const MyComponent = () => {
//     return <div>새로운 컴포넌트 생성</div>
// }

// function MyComponent(){
//     return <div>새로운 컴포넌트 생성</div>
// }
// export default MyComponent;


import React, { Children } from 'react';
import PropTypes from 'prop-types'
const MyComponent = ({name, age, children}) => {
    return (
        <div>
            안녕하세요 {name} 입니다.<br/>
            제 나이는{age} 입니다.<br/>
            {children} 
        </div>
    );
};
// props 기본값 설정
MyComponent.defaultProps = {
    name: "기본이름",
    age : 1
}
MyComponent.propTypes = {
    name: PropTypes.string
}
export default MyComponent;