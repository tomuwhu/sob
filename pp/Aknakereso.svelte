<script>
    const n = 15, asz = 40
    var mbsz = 0, ttsz = 0
    const t = Array(n ** 2 - asz).fill(" ")
                .concat(Array(asz).fill("💣")).sort(() => Math.random() - 0.5)
    var eg = false
    var ta = Array(n).fill(0).map((v, i) => 
                Array(n).fill(0).map((q, j) => t[n * i + j]))
    function f(x, y) {
        if (ta[x][y] == '📍') {
            ta[x][y] == ' '
            return true
        }
        if (ta[x][y] == '💣📍') {
            ta[x][y] == '💣'
            return true
        }
        if (ta[x][y] == '💣') eg = true 
        else {
            let hvm = 0;
            [-1,0,1].forEach(vx => {
                [-1,0,1].forEach(vy => {
                    if (    ta[x+vx] && ta[x+vx][y+vy] && 
                            (ta[x+vx][y+vy] == "💣" || ta[x+vx][y+vy] == "💣📍")
                    ) hvm ++
                })
            })
            ta[x][y] = hvm
            if (hvm == 0) {
                [-1,0,1].forEach(vx => {
                    [-1,0,1].forEach(vy => {
                        if (ta[x+vx] && ta[x+vx][y+vy] 
                            && ta[x+vx][y+vy] == " " 
                        ) f(x + vx, y + vy)
                    })
                })
            }
        }
    }
    function g(x, y, e) {
        if (ta[x][y] == " ") {
            ta[x][y] = '📍'
            ttsz ++
        }
        else if (ta[x][y] == "💣") {
            ta[x][y] = '💣📍'
            mbsz++
        }
        else if (ta[x][y] == "📍") {
            ta[x][y] = ' '
            ttsz --
        }
        else if (ta[x][y] == "💣📍") {
            ta[x][y] = '💣'
            mbsz--
        }
        if (mbsz == asz && ttsz == 0) {
            eg = "Nyert"
        }
        e.preventDefault()
    }
</script>
<h1>Aknakereső</h1>
<table on:contextmenu={e => e.preventDefault()}>
    {#if !eg}
    {#each ta as row, i}
        <tr>
            {#each row as cell, j}
                <td on:click={()=>f(i, j)} 
                    on:contextmenu={e => g(i, j, e)} 
                    class={[0,1,2,3,4,5,6,7].includes(cell) 
                        ? "U" 
                        : (cell == '📍' || cell == "💣📍" ? "J" : "")}
                    >{cell == '💣' ? '' : (cell == '💣📍' ? '📍' : cell)}</td>
            {/each}
        </tr>
    {/each}
    {:else}
        {#each ta as row, i}
        <tr>
            {#each row as cell, j}
                <td class={cell == '📍' || cell == "💣📍" ? "J" : ""}
                >{cell == "💣📍" ? "📍" : (cell == "📍" ? "H" : cell)}</td>
            {/each}
        </tr>
        {/each}
        {#if eg=="Nyert"}
        <tr><td colspan={n}>Nyert</td></tr> 
        {/if}
    {/if}
</table>
<style>
    h1 {
        color: rgb(77, 23, 23);
        text-shadow: 1px 1px 3px gray;
    }
    td.J {
        background-color: #b6b114;
    }
    td.U {
        background-color: #145856;
    }
    td {
        box-shadow: 1px 1px 4px inset black;
        width: 30px;
        height: 30px;
        background-color: rgb(0, 139, 139);
        border-radius: 7px;
        cursor: pointer;
        color: aliceblue;
    }
    td:hover {
        background-color: rgb(204, 102, 0);
    }
    table {
        border-spacing: 6px;
    }
</style>
