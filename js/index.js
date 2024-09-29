document.addEventListener('DOMContentLoaded', (event) => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const convertButton = document.getElementById('convertButton');
    const inputValue = document.getElementById('inputValue');
    const inputBase = document.getElementById('inputBase');
    const outputBase = document.getElementById('outputBase');
    const result = document.getElementById('result');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    convertButton.addEventListener('click', () => {
        try {
            const input = inputValue.value;
            const fromBase = parseInt(inputBase.value);
            const toBase = parseInt(outputBase.value);

            const decimalValue = parseInt(input, fromBase);
            const convertedValue = decimalValue.toString(toBase);

            result.value = convertedValue.toUpperCase();
        } catch (error) {
            result.value = 'Error: Invalid input';
        }
    });
});