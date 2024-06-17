import * as React from 'react';
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center min-h-screen">
            {children}
        </div>
    );
}

export default Layout;