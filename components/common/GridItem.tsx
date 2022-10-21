import { Grid, GridProps, styled } from '@mui/material';

// interface CustomGridItemProps extends GridProps {}

const GridRoot = styled(Grid)<GridProps>(({ theme }) => ({}));

const GridItem: React.FunctionComponent<GridProps> = (props: GridProps) => {
  const { children, ...otherProps } = props;

  return (
    <GridRoot item {...otherProps}>
      {children}
    </GridRoot>
  );
};

export default GridItem;
