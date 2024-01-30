import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <svg width="100%"
      height="100%"
      viewBox="0 0 600 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      <path d="M113.28 92.8237C115.728 92.8237 117.716 92.5542 119.243 92.0151C122.141 90.9819 123.59 89.0615 123.59 86.2539C123.59 84.6143 122.871 83.3452 121.433 82.4468C119.996 81.5708 117.739 80.7959 114.661 80.1221L109.406 78.9429C104.24 77.7749 100.668 76.5059 98.6917 75.1357C95.345 72.8447 93.6717 69.2622 93.6717 64.3882C93.6717 59.9409 95.2888 56.2461 98.5232 53.3037C101.758 50.3613 106.508 48.8901 112.775 48.8901C118.008 48.8901 122.467 50.2827 126.15 53.0679C129.856 55.8306 131.799 59.8511 131.979 65.1294H122.006C121.826 62.1421 120.524 60.0195 118.098 58.7617C116.481 57.9307 114.47 57.5151 112.067 57.5151C109.394 57.5151 107.261 58.0542 105.666 59.1323C104.071 60.2104 103.274 61.7153 103.274 63.647C103.274 65.4214 104.06 66.7466 105.632 67.6226C106.643 68.2065 108.799 68.8916 112.101 69.6777L120.658 71.7329C124.409 72.6313 127.24 73.833 129.149 75.3379C132.114 77.6738 133.596 81.0542 133.596 85.479C133.596 90.0161 131.855 93.7896 128.374 96.7993C124.915 99.7866 120.018 101.28 113.684 101.28C107.216 101.28 102.128 99.8091 98.4221 96.8667C94.7161 93.9019 92.8631 89.8364 92.8631 84.6704H102.768C103.083 86.939 103.7 88.6348 104.621 89.7578C106.306 91.8018 109.192 92.8237 113.28 92.8237ZM151.978 90.3643L159.559 63.2764H169.767L157.166 99.3936C154.741 106.356 152.82 110.669 151.405 112.331C149.99 114.016 147.16 114.858 142.915 114.858C142.062 114.858 141.376 114.847 140.86 114.824C140.343 114.824 139.568 114.791 138.535 114.723V107.042L139.748 107.109C140.691 107.154 141.59 107.12 142.443 107.008C143.297 106.896 144.016 106.637 144.6 106.233C145.161 105.851 145.678 105.054 146.149 103.841C146.644 102.628 146.846 101.887 146.756 101.617L133.279 63.2764H143.959L151.978 90.3643ZM189.295 70.3853C186.038 70.3853 183.803 71.7666 182.59 74.5293C181.961 75.9893 181.647 77.8535 181.647 80.1221V100H172.078V63.3438H181.343V68.7007C182.579 66.814 183.747 65.4551 184.847 64.624C186.824 63.1416 189.328 62.4004 192.361 62.4004C196.156 62.4004 199.256 63.3999 201.659 65.3989C204.085 67.3755 205.298 70.666 205.298 75.2705V100H195.46V77.6626C195.46 75.731 195.202 74.2485 194.685 73.2153C193.742 71.3286 191.945 70.3853 189.295 70.3853ZM212.124 67.252C214.662 64.0176 219.019 62.4004 225.196 62.4004C229.217 62.4004 232.788 63.1978 235.91 64.7925C239.032 66.3872 240.593 69.397 240.593 73.8218V90.6675C240.593 91.8354 240.616 93.2505 240.661 94.9126C240.728 96.1704 240.919 97.0239 241.233 97.4731C241.548 97.9224 242.019 98.293 242.648 98.585V100H232.204C231.912 99.2588 231.71 98.5625 231.598 97.9111C231.485 97.2598 231.395 96.5186 231.328 95.6875C230.003 97.125 228.475 98.3491 226.746 99.3599C224.68 100.55 222.344 101.146 219.738 101.146C216.414 101.146 213.662 100.202 211.484 98.3154C209.328 96.4062 208.249 93.7109 208.249 90.2295C208.249 85.7148 209.99 82.4468 213.472 80.4253C215.381 79.3247 218.188 78.5386 221.894 78.0669L225.162 77.6626C226.937 77.438 228.206 77.1572 228.97 76.8203C230.34 76.2363 231.025 75.3267 231.025 74.0913C231.025 72.5864 230.497 71.5532 229.441 70.9917C228.408 70.4077 226.881 70.1157 224.859 70.1157C222.591 70.1157 220.985 70.6772 220.041 71.8003C219.368 72.6313 218.918 73.7544 218.694 75.1694H209.429C209.631 71.9575 210.529 69.3184 212.124 67.252ZM219.266 93.0596C220.165 93.8008 221.266 94.1714 222.568 94.1714C224.635 94.1714 226.533 93.5649 228.262 92.3521C230.014 91.1392 230.924 88.9268 230.991 85.7148V82.1436C230.385 82.5254 229.767 82.8398 229.138 83.0869C228.532 83.3115 227.689 83.5249 226.611 83.7271L224.455 84.1313C222.433 84.4907 220.985 84.9287 220.109 85.4453C218.626 86.3213 217.885 87.6802 217.885 89.522C217.885 91.1616 218.346 92.3408 219.266 93.0596ZM276.461 67.2183C279.426 70.3853 280.908 75.0347 280.908 81.1665C280.908 87.6353 279.448 92.5654 276.528 95.957C273.631 99.3486 269.891 101.044 265.309 101.044C262.389 101.044 259.963 100.314 258.032 98.8545C256.976 98.0459 255.943 96.8667 254.932 95.3169V114.454H245.431V63.2764H254.629V68.7007C255.662 67.106 256.763 65.8481 257.931 64.9272C260.065 63.2876 262.603 62.4678 265.545 62.4678C269.835 62.4678 273.474 64.0513 276.461 67.2183ZM271.003 81.6382C271.003 78.8081 270.352 76.3037 269.049 74.125C267.769 71.9463 265.68 70.8569 262.782 70.8569C259.301 70.8569 256.909 72.5078 255.606 75.8096C254.932 77.5615 254.595 79.7852 254.595 82.4805C254.595 86.748 255.73 89.7466 257.998 91.4761C259.346 92.4868 260.941 92.9922 262.782 92.9922C265.455 92.9922 267.488 91.959 268.88 89.8926C270.295 87.8262 271.003 85.0747 271.003 81.6382ZM309.735 64.9609C312.61 66.8027 314.261 69.9697 314.687 74.4619H305.085C304.95 73.2266 304.602 72.2495 304.041 71.5308C302.985 70.228 301.188 69.5767 298.65 69.5767C296.561 69.5767 295.068 69.9023 294.169 70.5537C293.293 71.2051 292.855 71.9688 292.855 72.8447C292.855 73.9453 293.327 74.7427 294.27 75.2368C295.214 75.7534 298.549 76.6406 304.277 77.8984C308.095 78.7969 310.959 80.1558 312.868 81.9751C314.755 83.8169 315.698 86.1191 315.698 88.8818C315.698 92.5205 314.339 95.4966 311.621 97.8101C308.926 100.101 304.748 101.247 299.088 101.247C293.316 101.247 289.048 100.034 286.285 97.6079C283.545 95.1597 282.175 92.0488 282.175 88.2754H291.912C292.114 89.9824 292.552 91.1953 293.226 91.9141C294.416 93.1943 296.617 93.8345 299.829 93.8345C301.716 93.8345 303.21 93.5537 304.31 92.9922C305.433 92.4307 305.995 91.5884 305.995 90.4653C305.995 89.3872 305.546 88.5674 304.647 88.0059C303.749 87.4443 300.413 86.4785 294.641 85.1084C290.486 84.0752 287.554 82.7837 285.847 81.2339C284.14 79.7065 283.287 77.5054 283.287 74.6304C283.287 71.2388 284.612 68.3301 287.262 65.9043C289.935 63.4561 293.686 62.2319 298.515 62.2319C303.097 62.2319 306.837 63.1416 309.735 64.9609ZM350.825 89.2188C350.578 91.3975 349.443 93.6099 347.422 95.856C344.277 99.4272 339.875 101.213 334.215 101.213C329.543 101.213 325.421 99.708 321.85 96.6982C318.279 93.6885 316.493 88.792 316.493 82.0088C316.493 75.6523 318.099 70.7783 321.311 67.3867C324.545 63.9951 328.734 62.2993 333.878 62.2993C336.933 62.2993 339.684 62.8721 342.132 64.0176C344.581 65.1631 346.602 66.9712 348.197 69.4419C349.634 71.6206 350.566 74.1475 350.993 77.0225C351.24 78.707 351.341 81.1328 351.296 84.2998H326.163C326.297 87.9834 327.454 90.5664 329.633 92.0488C330.958 92.9697 332.553 93.4302 334.417 93.4302C336.394 93.4302 337.999 92.8687 339.235 91.7456C339.909 91.1392 340.504 90.2969 341.02 89.2188H350.825ZM341.324 77.9658C341.166 75.4277 340.392 73.5073 338.999 72.2046C337.629 70.8794 335.922 70.2168 333.878 70.2168C331.654 70.2168 329.925 70.9131 328.689 72.3057C327.477 73.6982 326.713 75.585 326.398 77.9658H341.324Z"
        fill="#FFFFFF" />
      <path d="M244.171 131.018V133.098L242.853 133.146C241.538 133.192 240.639 132.964 240.158 132.463C239.845 132.144 239.689 131.652 239.689 130.988V124.436H238.204V122.453H239.689V119.484H242.443V122.453H244.171V124.436H242.443V130.061C242.443 130.497 242.498 130.77 242.609 130.881C242.719 130.985 243.058 131.037 243.624 131.037C243.709 131.037 243.797 131.037 243.888 131.037C243.986 131.031 244.08 131.024 244.171 131.018ZM254.07 129.875C253.998 130.507 253.669 131.148 253.083 131.799C252.172 132.834 250.896 133.352 249.255 133.352C247.901 133.352 246.706 132.915 245.671 132.043C244.636 131.171 244.118 129.751 244.118 127.785C244.118 125.943 244.584 124.53 245.515 123.547C246.452 122.564 247.667 122.072 249.158 122.072C250.043 122.072 250.84 122.238 251.55 122.57C252.26 122.902 252.846 123.426 253.308 124.143C253.725 124.774 253.995 125.507 254.118 126.34C254.19 126.828 254.219 127.531 254.206 128.449H246.921C246.96 129.517 247.296 130.266 247.927 130.695C248.311 130.962 248.773 131.096 249.314 131.096C249.887 131.096 250.352 130.933 250.71 130.607C250.906 130.432 251.078 130.188 251.228 129.875H254.07ZM251.316 126.613C251.27 125.878 251.046 125.321 250.642 124.943C250.245 124.559 249.75 124.367 249.158 124.367C248.513 124.367 248.012 124.569 247.654 124.973C247.302 125.376 247.081 125.923 246.99 126.613H251.316ZM264.3 126.174H261.449C261.396 125.777 261.263 125.419 261.048 125.1C260.736 124.67 260.251 124.455 259.593 124.455C258.656 124.455 258.014 124.921 257.669 125.852C257.487 126.346 257.396 127.004 257.396 127.824C257.396 128.605 257.487 129.234 257.669 129.709C258.001 130.594 258.626 131.037 259.544 131.037C260.195 131.037 260.658 130.861 260.931 130.51C261.204 130.158 261.37 129.702 261.429 129.143H264.271C264.206 129.989 263.9 130.79 263.353 131.545C262.48 132.762 261.188 133.371 259.476 133.371C257.764 133.371 256.504 132.863 255.697 131.848C254.889 130.832 254.486 129.514 254.486 127.893C254.486 126.063 254.932 124.641 255.824 123.625C256.715 122.609 257.946 122.102 259.515 122.102C260.85 122.102 261.94 122.401 262.786 123C263.639 123.599 264.144 124.657 264.3 126.174ZM274.843 126.75V133H272.001V126.525C272.001 125.952 271.904 125.49 271.708 125.139C271.454 124.644 270.973 124.396 270.263 124.396C269.527 124.396 268.967 124.644 268.583 125.139C268.206 125.627 268.017 126.327 268.017 127.238V133H265.243V118.654H268.017V123.742C268.421 123.124 268.886 122.694 269.413 122.453C269.947 122.206 270.507 122.082 271.093 122.082C271.751 122.082 272.346 122.196 272.88 122.424C273.421 122.652 273.863 123 274.208 123.469C274.501 123.866 274.68 124.276 274.745 124.699C274.81 125.116 274.843 125.799 274.843 126.75ZM281.46 124.416C280.516 124.416 279.868 124.816 279.517 125.617C279.335 126.04 279.243 126.581 279.243 127.238V133H276.47V122.375H279.156V123.928C279.514 123.381 279.852 122.987 280.171 122.746C280.744 122.316 281.47 122.102 282.349 122.102C283.449 122.102 284.348 122.391 285.044 122.971C285.747 123.544 286.099 124.497 286.099 125.832V133H283.247V126.525C283.247 125.965 283.172 125.536 283.023 125.236C282.749 124.689 282.228 124.416 281.46 124.416ZM296.554 123.703C297.452 124.829 297.902 126.161 297.902 127.697C297.902 129.26 297.452 130.598 296.554 131.711C295.656 132.818 294.292 133.371 292.462 133.371C290.633 133.371 289.269 132.818 288.37 131.711C287.472 130.598 287.023 129.26 287.023 127.697C287.023 126.161 287.472 124.829 288.37 123.703C289.269 122.577 290.633 122.014 292.462 122.014C294.292 122.014 295.656 122.577 296.554 123.703ZM292.452 124.367C291.639 124.367 291.01 124.657 290.568 125.236C290.131 125.809 289.913 126.63 289.913 127.697C289.913 128.765 290.131 129.589 290.568 130.168C291.01 130.747 291.639 131.037 292.452 131.037C293.266 131.037 293.891 130.747 294.327 130.168C294.764 129.589 294.982 128.765 294.982 127.697C294.982 126.63 294.764 125.809 294.327 125.236C293.891 124.657 293.266 124.367 292.452 124.367ZM298.962 118.605H301.745V133H298.962V118.605ZM312.347 123.703C313.245 124.829 313.695 126.161 313.695 127.697C313.695 129.26 313.245 130.598 312.347 131.711C311.449 132.818 310.085 133.371 308.255 133.371C306.426 133.371 305.062 132.818 304.163 131.711C303.265 130.598 302.816 129.26 302.816 127.697C302.816 126.161 303.265 124.829 304.163 123.703C305.062 122.577 306.426 122.014 308.255 122.014C310.085 122.014 311.449 122.577 312.347 123.703ZM308.245 124.367C307.432 124.367 306.803 124.657 306.361 125.236C305.924 125.809 305.706 126.63 305.706 127.697C305.706 128.765 305.924 129.589 306.361 130.168C306.803 130.747 307.432 131.037 308.245 131.037C309.059 131.037 309.684 130.747 310.12 130.168C310.557 129.589 310.775 128.765 310.775 127.697C310.775 126.63 310.557 125.809 310.12 125.236C309.684 124.657 309.059 124.367 308.245 124.367ZM317.704 134.865C318.004 135.119 318.508 135.246 319.218 135.246C320.221 135.246 320.891 134.911 321.23 134.24C321.451 133.811 321.562 133.088 321.562 132.072V131.389C321.295 131.844 321.008 132.186 320.702 132.414C320.149 132.837 319.43 133.049 318.544 133.049C317.177 133.049 316.083 132.57 315.263 131.613C314.449 130.65 314.042 129.348 314.042 127.707C314.042 126.125 314.436 124.797 315.224 123.723C316.012 122.642 317.128 122.102 318.574 122.102C319.107 122.102 319.573 122.183 319.97 122.346C320.647 122.626 321.194 123.14 321.611 123.889V122.355H324.316V132.453C324.316 133.827 324.085 134.862 323.622 135.559C322.828 136.757 321.305 137.355 319.052 137.355C317.691 137.355 316.581 137.089 315.722 136.555C314.863 136.021 314.387 135.223 314.296 134.162H317.324C317.402 134.488 317.529 134.722 317.704 134.865ZM317.236 129.367C317.613 130.266 318.29 130.715 319.267 130.715C319.918 130.715 320.468 130.471 320.917 129.982C321.366 129.488 321.591 128.703 321.591 127.629C321.591 126.62 321.376 125.852 320.947 125.324C320.523 124.797 319.954 124.533 319.238 124.533C318.261 124.533 317.587 124.992 317.216 125.91C317.021 126.398 316.923 127.001 316.923 127.717C316.923 128.335 317.027 128.885 317.236 129.367ZM328.784 122.355V133H325.962V122.355H328.784ZM328.784 118.518V121.086H325.962V118.518H328.784ZM339.601 129.875C339.529 130.507 339.2 131.148 338.615 131.799C337.703 132.834 336.427 133.352 334.786 133.352C333.432 133.352 332.238 132.915 331.202 132.043C330.167 131.171 329.65 129.751 329.65 127.785C329.65 125.943 330.115 124.53 331.046 123.547C331.984 122.564 333.198 122.072 334.689 122.072C335.574 122.072 336.372 122.238 337.081 122.57C337.791 122.902 338.377 123.426 338.839 124.143C339.256 124.774 339.526 125.507 339.65 126.34C339.721 126.828 339.751 127.531 339.738 128.449H332.452C332.491 129.517 332.827 130.266 333.458 130.695C333.842 130.962 334.305 131.096 334.845 131.096C335.418 131.096 335.883 130.933 336.241 130.607C336.437 130.432 336.609 130.188 336.759 129.875H339.601ZM336.847 126.613C336.801 125.878 336.577 125.321 336.173 124.943C335.776 124.559 335.281 124.367 334.689 124.367C334.044 124.367 333.543 124.569 333.185 124.973C332.833 125.376 332.612 125.923 332.521 126.613H336.847ZM347.956 122.844C348.79 123.378 349.268 124.296 349.392 125.598H346.609C346.57 125.24 346.469 124.956 346.306 124.748C346 124.37 345.479 124.182 344.743 124.182C344.138 124.182 343.705 124.276 343.445 124.465C343.191 124.654 343.064 124.875 343.064 125.129C343.064 125.448 343.2 125.679 343.474 125.822C343.747 125.972 344.714 126.229 346.374 126.594C347.481 126.854 348.311 127.248 348.865 127.775C349.411 128.309 349.685 128.977 349.685 129.777C349.685 130.832 349.291 131.695 348.503 132.365C347.722 133.029 346.511 133.361 344.87 133.361C343.197 133.361 341.96 133.01 341.159 132.307C340.365 131.597 339.968 130.695 339.968 129.602H342.79C342.849 130.096 342.976 130.448 343.171 130.656C343.516 131.027 344.154 131.213 345.085 131.213C345.632 131.213 346.065 131.132 346.384 130.969C346.71 130.806 346.872 130.562 346.872 130.236C346.872 129.924 346.742 129.686 346.482 129.523C346.221 129.361 345.255 129.081 343.581 128.684C342.377 128.384 341.527 128.01 341.033 127.561C340.538 127.118 340.29 126.48 340.29 125.646C340.29 124.663 340.674 123.82 341.443 123.117C342.217 122.408 343.305 122.053 344.704 122.053C346.033 122.053 347.116 122.316 347.956 122.844Z"
        fill="#FFFFFF" />
    </svg>

  );
};
