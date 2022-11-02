import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: initial;
    }

    body * {
        z-index: 1;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    a{
        text-decoration: none;
    }
    
    input:focus {
        color: black;
        outline: none;
    }
    
    textarea:focus {
        outline: none;
    }
    
    select:focus {
        outline: none;
    }
    /* 웹 */
    @media screen and (min-width: 769px) {

        .Wrapperwidth{
            width: 480px;
        }
        .header{
            width: 480px;
        }
    }
    
    // 앱
    @media screen and (max-width: 768px) {
        .Wrapperwidth{
            width: 100%;
        }
        .top{
            width: 380px;
        }
    }
    
    .wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }
    
    .padding {
        padding: 20px;
    }
  
`;

export default GlobalStyle;
