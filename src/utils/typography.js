import Typography from "typography";
// import githubTheme from "typography-theme-github";
// const typography = new Typography(githubTheme);


const typography = new Typography({
	baseFontSize: '16px',
	baseLineHeight: '1.5',
	headerFontFamily: ['Nanum Gothic'],
	bodyFontFamily: ['Noto Sans KR'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles();
}

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
