import React from "react";
import assert from "assert";
import sinon from "sinon";
import { render } from "@testing-library/react";
import { Ripe } from "ripe-sdk";

import { RipeImageZoom } from "../../../components";
import { TEST_TIMEOUT } from "../../config";

describe("RipeImageZoom", function() {
    this.timeout(TEST_TIMEOUT);

    it("should instantiate the component", () => {
        const ripeInstance = new Ripe();
        const onLoading = sinon.fake();

        render(
            <RipeImageZoom
                ripe={ripeInstance}
                size={1000}
                zoom={100}
                pivot={{ x: 0, y: 0 }}
                onLoading={onLoading}
                onLoaded={() => {}}
            />
        );

        assert.strictEqual(onLoading.called, true);
    });
});
