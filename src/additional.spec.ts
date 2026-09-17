// Group Members: Patrick, Zara, Sage 

import { beforeEach, describe, expect, it } from "vitest";
import { TranscriptDB, type TranscriptService }  from "./transcript.service.ts";

let db: TranscriptService;

beforeEach(() => {
  db = new TranscriptDB();
});
// Classify the surviving mutants into innocuous (didn’t introduce a bug) 
// and non-innocuous (did introduce a bug). 
// Note: Student IDs should be positive.

describe('addStudent', () => {
    // Mutation 1: Line 40 - non-innocuous
    it("Student IDs returns should be positive", () => {
        expect(db.addStudent("test student")).toBeGreaterThan(0);
    })

    // Mutation 2: Line 43 - non-innocuous 
    it("Transcript starts as empty list", () => {
        const studentId = db.addStudent("test student");
        expect(db.getTranscript(studentId).grades).toEqual([]);
    });
})


// Mutation 3: Line 53 - non-innocuous - Zara 
describe('nameToIDs', () => {
    it("should return an array of student IDs for a given student name", () => {
        db.addStudent("abby"); 
        db.addStudent("blair");
        expect(db.nameToIDs("abby")).toEqual([1]);
    })
})

// Mutation 4: Line 54 - non-innocuous

// Mutation 5: Line 70 - innocuous

// Mutation 6: Line 121 - non-innocuous

// Mutation 7: Line 125 - innocuous

// 4 tests needed to kill all non-innocuous mutants.


