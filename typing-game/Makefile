# Biomeがチェックするファイルのパスを指定します。
# src/とpublic/内の一般的なフロントエンドファイルを対象とします。
TARGETS ?= ./src ./public

.PHONY: all lint format check

all: check

# LinterとFormatterを一度に実行し、問題を自動修正します。
check:
	@echo "Running Biome to lint, format, and apply safe fixes..."
	@npx @biomejs/biome check $(TARGETS)

# Linterを実行し、問題を報告します（自動修正なし）。
lint:
	@echo "Running Biome linter..."
	@npx @biomejs/biome lint $(TARGETS)

# Formatterを実行し、ファイルを整形します。
format:
	@echo "Running Biome formatter..."
	@npx @biomejs/biome format --write $(TARGETS)

# CI/CD用のコマンド。問題があればエラーで終了します。
ci:
	@echo "Running Biome for CI check..."
	@npx @biomejs/biome ci $(TARGETS)

help:
	@echo "Available commands:"
	@echo "  make all      - Run lint and format with auto-fixing (default)."
	@echo "  make check    - Alias for 'all'."
	@echo "  make lint     - Find and report lint issues."
	@echo "  make format   - Format all target files."
	@echo "  make ci       - Run checks for CI environments."
	@echo "  make help     - Show this help message."
