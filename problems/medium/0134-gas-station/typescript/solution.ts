export function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0;
    let currentTank = 0;
    let startStation = 0;

    for (let i = 0; i < gas.length; i++) {
        const net = gas[i] - cost[i];
        totalGas += net;
        currentTank += net;

        if (currentTank < 0) {
            startStation = i + 1;
            currentTank = 0;
        }
    }

    return totalGas >= 0 ? startStation : -1;
}