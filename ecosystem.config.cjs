const isWindows = process.platform === "win32";

module.exports = {
	apps: [
		{
			name: "Frontend",
			cwd: `.`,
			script: isWindows ? "node_modules/.bin/tsx.cmd" : "node_modules/.bin/tsx",
			args: "src",
			exec_interpreter: isWindows ? "cmd.exe" : undefined,
			env: {
				NODE_OPTIONS: "--expose-gc"
			},
			max_memory_restart: "768M",
			autorestart: true,
			restart_delay: 2000,
			max_restarts: 10,
			min_uptime: "10s",
			exp_backoff_restart_delay: 2000,
			kill_timeout: 10000
		}
		
	]
};
