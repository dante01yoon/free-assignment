import { 
	Color, 
	Typography 
} from 'src/theme/interface';
export interface Theme<
	ColorType = Color,
	TypographyType = Typography
> {
	colors: Readonly<ColorType & Color>; 
	typo: Readonly<TypographyType & Typography>; 
}

