import AppBar from 'components/AppBar/AppBar';
import Section from 'components/Section/Section';

const Layout = ({ children }) => {
  return (
    <>    
     <Section>
      <AppBar />
      <main>{children}</main>
     </Section>
    </>
  );
};

export default Layout;