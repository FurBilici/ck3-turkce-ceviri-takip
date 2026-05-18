export type ProjectStatus = "completed" | "translating" | "needs_review" | "planned";

export type FileStatus = {
  filename: string;
  status: ProjectStatus;
  percent: number;
  rows_total: number;
  rows_translated: number;
  empty_rows: number;
  token_errors: number;
};

export type ProjectStatusRecord = {
  id: string;
  name: string;
  workshop_id: string;
  steam_url: string;
  status: ProjectStatus;
  percent: number;
  files_total: number;
  files_completed: number;
  rows_total: number;
  rows_translated: number;
  token_errors: number;
  last_updated: string;
  files: FileStatus[];
};

export type PublicStatus = {
  updated_at: string;
  summary: {
    mods_total: number;
    mods_completed: number;
    mods_translating: number;
    files_total: number;
    files_completed: number;
    rows_total: number;
    rows_translated: number;
    percent: number;
    token_errors: number;
  };
  projects: ProjectStatusRecord[];
};
