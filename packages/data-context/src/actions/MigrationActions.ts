import type { DataContext } from '..'

export class MigrationActions {
  constructor (private ctx: DataContext) { }

  async createConfigFile () {
    const config = await this.ctx.migration.createConfigString()

    this.ctx.actions.file.writeFileInProject('cypress.config.js', config)

    this.ctx.lifecycleManager.refreshMetaState()

    this.ctx.actions.file.removeFileInProject('cypress.json')
  }
}
