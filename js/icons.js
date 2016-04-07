(function (document) {
    var container = document.querySelector('#icon-container');

    if (container) {
    
        container.innerHTML = "<svg style=\"display: none;\" viewBox=\"0 0 500 500\" x=\"0px\" y=\"0px\"><symbol viewBox=\"0 0 446.3 756.3\" id=\"icon-arrow-left\"> <path d=\"M434.9,57.7L82.8,378.1l352.1,320.5c14,12.7,15.3,33.9,2.8,47.3c-12.5,13.4-33.8,13.9-47.8,1.2L16.5,407.3\r\n\tc-2.9-1.6-5.6-3.7-8-6.2c-6-6.4-8.8-14.7-8.5-22.9c-0.2-8.2,2.6-16.5,8.6-22.9c2.4-2.5,5.1-4.6,8-6.2L389.9,9.2\r\n\tc14-12.7,35.4-12.2,47.9,1.2C450.2,23.8,448.9,45,434.9,57.7L434.9,57.7z\"/> </symbol><symbol viewBox=\"0 0 412 412\" id=\"icon-cross\"> <style type=\"text/css\"> .st0{fill:#0066CC;} </style> <path id=\"cross-x-mark-4-icon\" class=\"st0\" d=\"M412,206c0,113.8-92.2,206-206,206S0,319.8,0,206S92.2,0,206,0S412,92.2,412,206z M372,206\r\n\tc0-91.8-74.3-166-166-166c-91.8,0-166,74.3-166,166c0,91.8,74.3,166,166,166C297.8,372,372,297.7,372,206z M275.3,312.5L208,245.2\r\n\tl-67.3,67.3l-36.2-36.2l67.3-67.3l-67.3-67.3l36.2-36.2l67.3,67.3l67.3-67.3l36.2,36.2L244.2,209l67.3,67.3L275.3,312.5z\"/> </symbol></svg>";

    

    } else {
        throw new Error('svginjector: Could not find element: #icon-container');
    }

})(document);