export const Wrapper = ({ children }) => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--five)',

        }}>
            {children}
        </div>
    )
}