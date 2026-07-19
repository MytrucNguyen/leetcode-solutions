export function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Set<number>();

    function dfs(room: number): void {
        visited.add(room);

        for (const key of rooms[room]) {
            if (!visited.has(key)) {
                dfs(key);
            }
        }
    }

    dfs(0);

    return visited.size === rooms.length;
}
